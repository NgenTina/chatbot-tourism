interface BlobImageProps {
  src: string;
  alt: string;
  clipPathId: string;
  clipPathD: string;
}

const BlobImage = ({ src, alt, clipPathId, clipPathD }: BlobImageProps) => {
  return (
    <svg viewBox="0 0 500 500" width="300" height="300" className="overflow-visible">
      <defs>
        <clipPath id={clipPathId} clipPathUnits="userSpaceOnUse">
          <path d={clipPathD} />
        </clipPath>
      </defs>
      <image
        href={src}
        width="500"
        height="500"
        clipPath={`url(#${clipPathId})`}
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

export default BlobImage;
