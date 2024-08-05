export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <form className="form">
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />

        <label htmlFor="link">Link</label>
        <input type="url" name="link" />

        <label htmlFor="description">description </label>
        <input type="textarea" name="description" />
      </form>
    </div>
  );
}
