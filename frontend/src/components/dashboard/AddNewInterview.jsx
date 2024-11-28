import React, { useContext, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CommonForm from "../common-form/CommonForm";
import { dialogFormControls } from "@/config/config";
import { JobContext } from "@/context/jobcontext";
import { useNavigate } from "react-router-dom";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();

  function redirectToInterview() {
      navigate("/home/interview");
  }

  const {
    dialogFormData,
    setDialogFormData,
    handleDialogSubmit,
    loading,
  } = useContext(JobContext);

  console.log(dialogFormData);

  return (
    <div>
      <div
        className="py-10 px-20 border rounded-lg bg-secondary hover:scale-105 hover:shadow-lg cursor-pointer transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="font-bold text-lg text-center">+ Add New</h2>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us more about Job you are interviewing
            </DialogTitle>
            <DialogDescription>
              Add Details about job position, your skills, and year of
              experience
            </DialogDescription>
          </DialogHeader>
          <CommonForm
            handleSubmit={handleDialogSubmit}
            formControls={dialogFormControls}
            formData={dialogFormData}
            setFormData={setDialogFormData}
            loading={loading}
            onClickHandler={redirectToInterview}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
