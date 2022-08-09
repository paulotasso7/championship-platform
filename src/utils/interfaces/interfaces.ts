export interface UserInterface {
  name: string;
  userName: string;
  userId: string;
  email: string;
  birthDate: string;
  country: string;
  password: string;
  cPassword?: string;
}

export interface IMatchCard {
  id: number;
  name: string;
  active: boolean;
  imgs: string;
  matches: {
    matchId: number;
    date: string;
    score: number;
    tournament: string;
  }[];
}

export interface Props {
  children: React.ReactNode;
}
