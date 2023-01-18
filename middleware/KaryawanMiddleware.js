import _ from "lodash";
import Karyawan from "../models/KaryawanModels.js";

export const maxKaryawan = async (req, res, next) => {
  const karyawan = await Karyawan.find();

  if (karyawan.length >= 10)
    return res.status(429).send({ msg: "Maximal karyawan hanya 5" });

  next();
};

export const checkNama = async (req, res, next) => {
  const { nama_karyawan, email } = req.body;

  const karyawan = await Karyawan.findOne({
    nama_karyawan: nama_karyawan,
    email: email,
  });

  if (karyawan) return res.status(409).send({ msg: "Data Sudah Ada" });

  next();
};
