export default function TripTypeForm() {
  return (
    <form>
      <h2>What type of trip are you going on?</h2>
      
      <div>
        <input type="radio" name="type" value="hike"/>
        <label>Hiking</label>
      </div>

      <div>  
        <input type="radio" name="type" value="beach"/>
        <label>Beach</label>  
      </div>

      {/* Other options */}
      
      <button type="submit">
        Next
      </button>
    </form>
  );
}
