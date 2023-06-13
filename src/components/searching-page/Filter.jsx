function Filter() {
  return (
    <div>
      <h1>Filter Pencarian Kampus</h1>
      <form>
        <label for="tipe">Tipe:</label>
        <select id="tipe" name="tipe">
          <option value="">Semua</option>
          <option value="1">Universitas</option>
          <option value="2">Politeknik</option>
          <option value="2">Institut</option>
          <option value="3">Akademi</option>
        </select>

        <label for="provinsi">Provinsi:</label>
        <select id="provinsi" name="provinsi">
          <option value="">Semua</option>
          <option value="banten">Banten</option>
          <option value="jakarta">Jakarta</option>
          <option value="jawa barat">Jawa Barat</option>
          <option value="jawa tengah">Jawa Tengah</option>
          <option value="jawa timur">Jawa Timur</option>
          <option value="Jogjakarta">Jogjakarta</option>
        </select>

        <label for="akreditasi">Akreditasi:</label>
        <select id="akreditasi" name="akreditasi">
          <option value="">Semua</option>
          <option value="A">Akreditasi A</option>
          <option value="B">Akreditasi B</option>
          <option value="C">Akreditasi C</option>
        </select>

        <label for="fakultas">Fakultas:</label>
        <select id="fakultas" name="fakultas">
          <option value="">Semua</option>
          <option value="teknik">Teknik</option>
          <option value="ekonomi">Ekonomi</option>
          <option value="hukum">Hukum</option>
        </select>

        <input type="submit" value="Filter" />
      </form>
    </div>
  );
}

export default Filter;
