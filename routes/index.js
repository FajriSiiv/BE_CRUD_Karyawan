import express from "express";
import {
  createKaryawan,
  deleteKaryawan,
  getKaryawanById,
  getKaryawans,
  updateKaryawan,
} from "../controllers/KaryawanController.js";

const router = express.Router();

router.get("/karyawan", getKaryawans);
router.get("/karyawan/:id", getKaryawanById);
router.post("/karyawan", createKaryawan);
router.patch("/karyawan/:id", updateKaryawan);
router.delete("/karyawan/:id", deleteKaryawan);

export default router;
