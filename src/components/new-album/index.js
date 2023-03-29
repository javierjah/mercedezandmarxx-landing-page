import "./new-album.css";

function NewAlbum() {
  return (
    <div className="new-album-banner">
      <div>
        <div>New Album </div>
        <div>“CHANGES" out Now </div>
        <div>Buy from Gizzverse </div>
        <div>US AU EU </div>
      </div>

      <img
        className="new-album-img"
        src="https://uploads-ssl.webflow.com/5efb454a51d5f6e79850e4ea/6318767305e71ebae34e837b_changes.jpg"
        loading="lazy"
        alt="album img"
      />
    </div>
  );
}

export default NewAlbum;
