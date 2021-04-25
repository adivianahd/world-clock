import FadeLoader from "@styles/FadeLoader";
import StyleLoad from "@styles/StyleLoad";

const Loading: string = "LOADING";

const Loader = (): JSX.Element => {
  return (
    <FadeLoader>
      {Loading.split("").map((letter) => (
        <StyleLoad key={letter}>{letter}</StyleLoad>
      ))}
    </FadeLoader>
  );
};

export default Loader;
