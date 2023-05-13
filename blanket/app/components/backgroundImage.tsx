function BackgroundImage({ image }: { image: string }) {
  return (
    <img
      src={image}
      alt="background image"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        position: "fixed",
      }}
    ></img>
  );
}

export default BackgroundImage;
