export interface ClinicaDTO {
  nome: string;
  cnpj: string;
  cidade: string;
  estado: string;
  rua: string;
  cep: string;
  lat: number;
  lon: number;
  especialidadeIds: number[];
  url: string;
}
