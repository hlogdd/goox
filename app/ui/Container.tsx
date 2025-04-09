// components/Container.tsx
type Props = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function Container({ children, className = "" }: Props) {
    return (
      <div className={`mx-auto max-w-[1480px] px-4 md:px-6 ${className}`}>
        {children}
      </div>
    );
  }
  