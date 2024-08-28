import './styles.scss';

export interface TogglerButton<T> {
  id: T;
  content: React.ReactNode;
}

export interface TogglerProps<T> {
  className?: string;
  active: T;
  data: Array<TogglerButton<T>>;
  onClick: (id: T) => void;
}

export const Toggler = <T,>({ className, data, active, onClick }: TogglerProps<T>) => {
  const clicked = (id: T) => {
    onClick(id);
  };

  return (
    <div className={`toggler ${className ?? ''}`}>
      {data.map((el) => (
        <button
          className={`toggler__btn ${el.id === active ? 'toggler__btn--active' : ''}`}
          onClick={() => clicked(el.id)}
        >
          {el.content}
        </button>
      ))}
    </div>
  );
};
