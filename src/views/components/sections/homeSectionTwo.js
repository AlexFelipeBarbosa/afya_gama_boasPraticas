import backgroundTwo from "../../../assets/images/background/bg2.jpeg";
import cavaco2 from "../../../assets/images/elements/elemento2.jpg";
import footer from "../footer";

let TextContent = `
 texto de teste .... esse é só um texto de teste
`;

let HomeSectionTwo = `
<section class="section background--two" style="background-image: url(${backgroundTwo})"> 
<div> 
  <img src="${cavaco2}" alt="Cavaco2" width="300px" heigth="auto">
  <div> 
    <p>
     ${TextContent}
    </p>
  
  </div>

</div>
${footer}

</section>


`;

export default HomeSectionTwo;
