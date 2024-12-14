// TODO 3: Import data students dari folder data/students.js
// code here
const students =require('../data/students.js')

// Membuat Class StudentController
class StudentController {
  index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    const data = {
      "message": "Menampilkan Data",
      "data": students
    }
    res.status(200).json(data)
  }

  store(req, res) {
    // TODO 5: Tambahkan data students
    // code here
    const {name} = req.body;
    students.push(name)
    const data = {
      "message": `Menambahkan Data : ${name}`,
      "data": students
    }
    res.status(201).json(data)
  }

  update(req, res) {
    // TODO 6: Update data students
    // code here
    const { id } = req.params;
    const { name } = req.body;

    students[id] = name;
    const data = {
      "message": `Mengedit Data dengan id : ${id}`, name,
      "data": students
    }
    res.status(201).json(data)
  }

  destroy(req, res) {
    // TODO 7: Hapus data students
    // code here
    const { id } = req.params;

    students.splice(id, 1);
    const data = {
      "message": `Menghapus Data dengan id: ${id}`,
      "data": students
  }
  res.status(200).json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;
