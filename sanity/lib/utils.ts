import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { dataset, projectId, studioUrl } from "@/sanity/lib/api";
import { createDataAttribute, CreateDataAttributeProps } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";

const builder = createImageUrlBuilder({
    projectId: projectId!,
    dataset: dataset!,
});

export function urlForImage(source: SanityImageSource) {
    if (!source || !(source as any)?.asset?._ref) return undefined;

    return builder.image(source).auto("format");
}

export function resolveOpenGraphImage(
    image: SanityImageSource & { alt?: string },
    width = 1200,
    height = 627,
) {
    const url = urlForImage(image)?.width(width).height(height).fit("crop").url();
    return url ? { url, alt: image.alt ?? "", width, height } : undefined;
}

type DataAttributeConfig = CreateDataAttributeProps &
    Required<Pick<CreateDataAttributeProps, "id" | "type" | "path">>;

export function dataAttr(config: DataAttributeConfig) {
    return createDataAttribute({
        projectId,
        dataset,
        baseUrl: studioUrl,
    }).combine(config);
}
