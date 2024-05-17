import { Button, Layout } from "../../components";
import {
  HomeActionContentElement,
  HomeBearImage,
  HomeWrapperElement,
} from "./Home.style";
import HomeSalesforce from "../../assets/Salesforce-Astro2.png"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <Layout>
      <HomeWrapperElement>
        <HomeActionContentElement>
          <h1>Venha conhecer  <span>Customer 360 </span></h1>
          <p>O customer 360 é a nossa suite de produtos e serviços que ajuda a 98% dos clientes a alcançar ou superar suas metas de ROI.</p>
          <Button onClick={handleClick}>Faça o teste grátis</Button>
        </HomeActionContentElement>
        <HomeBearImage src={HomeSalesforce} alt="placeholder" />
      </HomeWrapperElement>
    </Layout>
  );
}
