import './RegularButton.scss';

interface Props {
    label?: string;
    variant?: 'primary' | 'secondary';
}

export const RegularButton = ({label, variant = 'primary'}: Props) => {
  return (
    <button className={`regular-button ${variant}`}>{label}</button>
  );
};