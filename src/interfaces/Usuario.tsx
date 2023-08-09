interface Usuario {
  id: number;
  name: string;
  email: string;
  password?: string;
  confirmPassword?: string;
}

export default Usuario;
