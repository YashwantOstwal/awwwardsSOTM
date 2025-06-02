const Video = (props: { src: string; className?: string }) => (
  <video
    {...props}
    className="h-full w-full object-cover"
    autoPlay
    loop
    playsInline
    muted
  />
);

export default Video;
