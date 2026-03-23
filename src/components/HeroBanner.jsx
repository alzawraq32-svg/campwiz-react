function HeroBanner({ session }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Welcome {session?.user}</h2>
    </div>
  );
}

export default HeroBanner;