import express from "express";
import {
  createKaryawan,
  deleteKaryawan,
  getKaryawanById,
  getKaryawans,
  updateKaryawan,
} from "../controllers/KaryawanController.js";
import { checkNama, maxKaryawan } from "../middleware/KaryawanMiddleware.js";

const router = express.Router();

router.get("/karyawan", getKaryawans);
router.get("/karyawan/:id", getKaryawanById);
router.post("/karyawan", checkNama, maxKaryawan, createKaryawan);
router.patch("/karyawan/:id", checkNama, updateKaryawan);
router.delete("/karyawan/:id", deleteKaryawan);

export default router;
