export default function YouTubeEmbed({ id, title }: { id: string; title?: string }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-lg border">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title={title ?? "YouTube video player"}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      />
    </div>
  );
}