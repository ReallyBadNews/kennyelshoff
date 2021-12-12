import { Heading } from "@components/Heading";
import { Image } from "@components/Image";
import Page from "@components/Page";
import { Paragraph } from "@components/Paragraph";
import { Separator } from "@components/Separator";
import { Stack } from "@components/Stack";
import { getAllImagePathsFromDir } from "@lib/images";
import { InferGetStaticPropsType } from "next";
import { getPlaiceholder } from "plaiceholder";

export const getStaticProps = async () => {
  const imagePaths = getAllImagePathsFromDir("work/gmg");

  const images = await Promise.all(
    imagePaths.map(async (src) => {
      const { base64, img } = await getPlaiceholder(src);

      return {
        ...img,
        blurDataURL: base64,
      };
    })
  ).then((values) => {
    return values;
  });

  return { props: { images } };
};

const GMGWork: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  images,
}) => {
  return (
    <Page
      description="Front-end engineeer and designer helping build and maintain sites for the seven television stations in our group and WPLG!"
      title="Graham Media Group"
    >
      <Stack css={{ stackGap: "$3", display: "block" }}>
        <Heading
          as="h2"
          fontFamily="mono"
          size="2"
          variant="contrast"
          weight="7"
        >
          Projects
        </Heading>
        <Separator css={{ my: "$3", "@bp1": { my: "$5" } }} size="2" />
        <Paragraph size="1" variant="gray">
          Header & Account Menu
        </Paragraph>
        <figure>
          <Image
            {...images[0]}
            css={{ borderRadius: "$rg" }}
            layout="responsive"
            placeholder="blur"
          />
        </figure>
        <Paragraph size="1" variant="gray">
          Header & Account Menu
        </Paragraph>
        <figure>
          <Image
            {...images[1]}
            css={{ borderRadius: "$rg" }}
            layout="responsive"
            placeholder="blur"
          />
        </figure>
      </Stack>
    </Page>
  );
};

export default GMGWork;
