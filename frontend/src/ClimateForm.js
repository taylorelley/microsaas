export default function ClimateForm() {
  return (
    <form>
      <h2>What climate and temperatures can you expect?</h2>

      <select name="climate">
        <option value="cold">Cold</option>
        <option value="mild">Mild</option> 
        <option value="hot">Hot</option>
        <option value="varied">Varied</option>  
      </select>

      {/* Temperature inputs */}

      <button type="submit">
        Next  
      </button>
    </form>
  );
}
