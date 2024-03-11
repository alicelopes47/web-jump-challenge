import './MainLayout.scss';

interface Props {
    children: React.ReactNode;
}  

export const MainLayout = ({children}: Props) => {
    return (
        <div className="main-layout">
            {children}
        </div>
    )
}