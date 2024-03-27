import React from "react";
import styles from "./jobCard.module.css";
import EditBtn from "../../../icons/EditBtn";

function JobCard({ job }) {
  console.log(job);

  return (
    <div className={styles.jobCard}>
      <div className={styles.detailsContainer}>
        <div className={styles.companyImg}>
          <img
            src="https://s3-alpha-sig.figma.com/img/c8da/ceeb/b96359ecb130cf49b1e7aaa8c20a4a56?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a8olEG5VdCGHbC~k3jzihqWa8sFH~NTnXFnvQOB~cFTy4rq10teAY0EwQUoxfPtR9nObJFsUk-7Q3lA4tPRNAeGGAmrB~JCacP25UgZyLvVGaGGvfLdVu~52ZGkmFFL8ZCSZ0AHemJhMeIr5Ow89VM9z-3brYluwMb8Y-IIQ5fVZZ8F3HHj-cXYhH44khQXbSKMe9WFiEXkM8-XLF6HSWsKVT~skdri9xEyyqmHj4LnXxXyV4F-0zquKJtM0G36E6Sgvo3uDWi1LbilRfFPjClSKEJtAPArYYZW6923PIE0FdZ~xsxVoLNuEW2WyZLPBSeUH279xY58rNYC~SwDcqQ__"
            alt="companyImg"
          />
        </div>
        <div className={styles.jobNameAndDesc}>
          <h4 className={styles.jobName}>{job.name}</h4>
          <p className={styles.jobDesc}>{job.description}</p>
        </div>
      </div>
      <p className={styles.profession}>{job.profession}</p>
      <h4 className={styles.amountSubmited}>{job.apply} מועמדים </h4>
      <p className={styles.status}>{job.status}</p>
      <p className={styles.date}>{job.date}</p>
      <p className={styles.edit}>
        <EditBtn color={"#8792A1"} />
      </p>
    </div>
  );
}

export default JobCard;
