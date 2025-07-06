// interfaces/index.ts

export interface CardProps {
  title: string;
  description?: string;
  imageUrl?: string;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: React.ReactNode;
}
