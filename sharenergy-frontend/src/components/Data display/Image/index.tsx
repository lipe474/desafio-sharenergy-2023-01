import CardMedia from "@mui/material/CardMedia";

type ImageProps = {
  component: "img" | "feImage" | "image";
  image: string;
  alt: string;
  sx?: object;
};

export default function Images(props: ImageProps) {
  return <CardMedia component={props.component} image={props.image} alt={props.alt} sx={props.sx} />;
}
