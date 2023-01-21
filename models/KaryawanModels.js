import mongoose from "mongoose";

const Karyawan = mongoose.Schema({
  nama_karyawan: {
    type: String,
    require: true,
  },
  jabatan: {
    type: String,
    require: true,
  },
  umur: {
    type: Number,
    require: true,
  },
  join_perusahaan: {
    type: String,
    require: true,
  },
  gaji: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    unique: true,
    match:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
});

export default mongoose.model("karyawan", Karyawan);
