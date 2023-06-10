// import {FC} from 'react'
interface DarkLayoutProps {
  children: React.ReactNode;
}

export const DarkLayout = ({children}: DarkLayoutProps) => {
// export const DarkLayout: FC = ({children}) => {
  return (
    <div style={{
      // backgroundColor: 'rgba(0,0,0,0.3)',
      backgroundColor: 'red',
      borderRadius: '5px',
      padding: '10px'
    }}>
      <h3>Dark-Layout</h3>
      <div>
        {children}
      </div>
    </div>
  )
}
