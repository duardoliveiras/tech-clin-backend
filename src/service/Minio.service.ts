import * as Minio from "minio";
import path from "path";

class MinioService {
  private minioClient: Minio.Client;

  constructor() {
    this.minioClient = new Minio.Client({
      endPoint: "localhost",
      port: 9000,
      useSSL: process.env.USE_SSL === "true",
      accessKey: process.env.ACCESS_KEY,
      secretKey: process.env.SECRET_KEY,
    });
  }

  async upload(file, bucketName: string) {
    try {
      const objectName = path.basename(file.originalname);
      const bucketExists = await this.minioClient.bucketExists(bucketName);

      if (!bucketExists) {
        await this.minioClient.makeBucket(bucketName);

        const policy = `
                    {
                    "Version": "2012-10-17",
                    "Statement": [
                        {
                        "Effect": "Allow",
                        "Principal": {"AWS": ["*"]},
                        "Action": ["s3:GetObject"],
                        "Resource": ["arn:aws:s3:::${bucketName}/*"]
                        }
                    ]
                    }
                `;
        await this.minioClient.setBucketPolicy(bucketName, policy);
      }

      await this.minioClient.putObject(
        bucketName,
        objectName,
        file.buffer,
        file.size
      );

      const url = `${process.env.END_POINT}/${bucketName}/${objectName}`;
      console.log("[minio]: documento enviado - ", url);
      return url;
    } catch (error) {
      console.error("Erro ao enviar para o Minio", error);
    }
  }

  async delete(bucket: string, fileName: string) {
    try {
      console.log(`Tentando remover -${fileName}- do bucket -${bucket}-`);
      await this.minioClient.removeObject(bucket, fileName);
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

export default new MinioService();
