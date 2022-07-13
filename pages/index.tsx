import type { NextPage } from 'next'
import { Layout } from '../components/Layout';
import { Desarrollo } from '../components/page/home/Desarrollo';
import { Header } from '../components/page/home/Header';
import { Precios } from '../components/page/home/Precios';
import { Proyectos } from '../components/page/home/Proyectos';
import { Servicios } from '../components/page/home/Servicios';



const Home: NextPage = () => {
  return (
    <Layout>
      <>
        <Header/>
        <Servicios/>
        <Desarrollo/>
        <Proyectos/>
        <Precios/>
      </>
    </Layout>
  )
}

export default Home;
