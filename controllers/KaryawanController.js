import Karyawan from "../models/KaryawanModels.js";

export const getKaryawans = async (req, res) => {
  try {
    const karyawan = await Karyawan.find();

    res.status(200).send(karyawan);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

export const getKaryawanById = async (req, res) => {
  try {
    const karyawan = await Karyawan.findById(req.params.id);
    res.json(karyawan);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createKaryawan = async (req, res) => {
  const { nama_karyawan, umur, join_perusahaan, gaji, gender, email } =
    req.body;

  const karyawan = new Karyawan({
    nama_karyawan: nama_karyawan,
    umur: umur,
    join_perusahaan: join_perusahaan,
    gaji: gaji,
    gender: gender,
    email: email,
  });

  try {
    const newKaryawan = await karyawan.save();
    res.status(201).send(newKaryawan);
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

export const updateKaryawan = async (req, res) => {
  try {
    await Karyawan.updateOne({ _id: req.params.id }, { $set: req.body });
    res.status(200).json({ msg: "berhasil Update" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteKaryawan = async (req, res) => {
  try {
    const deleteKaryawan = await Karyawan.deleteOne({ _id: req.params.id });
    res.status(200).json(deleteKaryawan);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
