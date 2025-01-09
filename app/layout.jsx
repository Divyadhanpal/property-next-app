import '../assets/styles/globals.css';

export const metadata = {
    title : 'property app',
    keywords: 'rental,property,real-estate'
}

const MainLayout = ({children}) => {
    return ( <html>
        <body>
            <main>{children}</main>
        </body>
    </html> );
}
 
export default MainLayout;