import BackgroundImage from "./components/backgroundImage";
import Rightcontainer from "./rightcontainer/rightcontainer";
import Leftcontainer from "./leftcontainer/leftcontainer";
import Middlecontainer from "./middlecontainer/middlecontainer";

export default function Home() {
  return (
    <main>
      <BackgroundImage image="https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-2736499.jpg&fm=jpg" />
      <Middlecontainer>
        <Rightcontainer />
        <Leftcontainer />
      </Middlecontainer>
    </main>
  );
}
