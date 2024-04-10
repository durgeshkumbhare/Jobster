import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect } from "../../components";
import { toast } from "react-toastify";
import {
  clearValue,
  createJob,
  editJob,
  handleChange,
} from "../../features/Job/jobSlice";

const AddJobs = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      return toast.error("please fill all the fields");
    }
    if (isEditing) {
      dispacth(
        editJob({
          jobId: editJobId,
          job: { position, company, jobType, jobLocation, status },
        })
        );
        return
    }
    dispacth(createJob({ position, company, jobLocation, status, jobType }));
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispacth(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing? "Edit Job": "Add Jobs"}</h3>
        <div className="form-center">
          {/* POSITION */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />

          {/* Company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />

          {/* JOBLOCATION */}
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/*job STATUS */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* Job Type */}

          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          {/* BTN-CONTAINER */}
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispacth(clearValue())}
            >
              clear
            </button>
            <button type="submit" className="btn btn-block submit-btn">
              Submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJobs;
