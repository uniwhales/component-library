export enum ContentType {
  Audio = 'Audio',
  Article = 'Article',
  Video = 'Video',
}
export type ContentCardProps = {
  size: 'S' | 'LnM'
  duration?: string,
  releaseDate: string,
  title: string,
  coverImgUrl: string,
  contentType: ContentType,
  tags: string[],
  onClick: () => void,
  guestLink?: string,
  guest?: string
  chipText?: string
  onTagClick?: (tag: string) => void
  width?: string
};
