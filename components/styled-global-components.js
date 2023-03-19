import tw from "tailwind-styled-components";

export const H1 = tw.h1`
    text-green
    text-displaySM
`;

export const H2 = tw.h2`
    text-xxl
    lg:text-xxl
    font-bold
`;

export const H3 = tw.h3`
    text-2xl
    lg:3xl
    xl:4xl
    font-bold
`;

export const FlexColContainer = tw.div`
    flex
    flex-col
`;

export const FlexColRow = tw.div`
    flex
    flex-col
    justify-center
`;

export const FlexColRowContainer = tw(FlexColRow)`
    md:flex-row
`;

export const FlexColRowContainerLg = tw(FlexColRow)`
    lg:flex-row
`;

export const FlexColRowContainerXl = tw(FlexColRow)`
    xl:flex-row
`;

export const FlexRowContainer = tw.div`
    flex
    flex-row
`;

export const FlexColCentered = tw.div`
    w-full
    flex
    flex-col
    items-center
    justify-center
`;

export const FlexColCenteredX = tw.div`
    w-full
    flex
    flex-col
    items-center
`;

export const FlexColCenteredY = tw.div`
    w-full
    flex
    flex-col
    justify-center
`;

export const FlexRowCenteredX = tw.div`
    w-full
    flex
    flex-row
    justify-center
`;

export const FlexRowCenteredY = tw.div`
    w-full
    flex
    flex-row
    justify-center
`;
