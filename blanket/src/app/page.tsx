import Container from "./components/container";
import BackgroundImage from "./components/backgroundImage";

export default function Home() {
  return (
    <main>
      <BackgroundImage image="https://images.pexels.com/photos/2736499/pexels-photo-2736499.jpeg?cs=srgb&dl=pexels-content-pixie-2736499.jpg&fm=jpg" />
      <Container>
        <p>This is inside?</p>
      </Container>
    </main>
  );
}
