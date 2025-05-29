import React from "react";
import styles from "./style.module.css";
import { clientData } from "@/data/homeData";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="containers">
      <div className={styles.client_container}>
        {[...clientData, ...clientData]?.map((clientData) => (
          <div key={`client-${clientData.id}`} className={styles.client_item}>
            <Image
              src={clientData.imageUrl}
              alt={`client-${clientData.id}`}
              className={styles.client_image}
              width={50}
              height={0}
              objectFit="cover"
              priority
              sizes="100vw"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
