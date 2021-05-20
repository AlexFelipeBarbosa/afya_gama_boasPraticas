import backgroundTwo from "../../../assets/images/background/bg2.jpg";
import elemento2 from "../../../assets/images/elements/elemento2.jpg";
import footer from "../footer";

let TextContent = `
 texto de teste .... esse é só um texto de teste
`;

let HomeSectionTwo = `
<section class="section background--two" style="background-image: url(${backgroundTwo})"> 
<div class="block-section--two"> 
  <img src="${elemento2}" alt="Elemento2" width="300px" heigth="auto">
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
