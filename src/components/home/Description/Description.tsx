"use client";
import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import styles from "./Description.module.sass";

const PLACEHOLDER_IMAGE =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCACCAIIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAMEAgEFBv/EABwQAQEBAQEBAQEBAAAAAAAAAAACAQMREjEhQf/EABgBAAMBAQAAAAAAAAAAAAAAAAECAwQA/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAECEQP/2gAMAwEAAhEDEQA/APgw14PFYNZdx3weLZS07hksyZOKJmQdBcYfGJaNGpbzBOGZLNpWMeObhny5uEORRdH1hVYtglIovTawvWnKdZ8ABgL+R4b45uMcrTYV4PG9weLZqdgzDIxmcNjFE7DIxREl88UxJNOjsyZktxBswho0pPyzsqfhmoJw3UdyReLblN0lTIdSXhNKLwil80tYDvgN0DPlzcN8Z3GKVr4VuOeN7jPi2aSwTh0YXOH88WlSsO54r5yRyxZywtKZEmzLvOTplKgV8MVKr5YuScHqHpKTpL0Oko+2DBQdMT2q64mtWVzAAN13FTFNs0xxqL1lqmV8hY1J3Mmf0/mrE7FXLFvLEnFbyCpWKeefw+cK5fiifwlI54XeHl2RyPriLti/qh7f66DEHZJavsj6fp4eMBwD0VnrFaN1jdZ5F+uVrO65us+q5EydUc9Szp/PVISxfy1bx15/HVvHXVLUX8z53+JedHzpKnYd6Xej6YuilI66g76s66h76Joi7b+o7VdtSXow0Z9DPoMPTvpmqL2mdpLik01tM+sbTP0eQ8p86fz1HNH86OL0eVLOVPN5Us5UW1Ox6POlE0g52fNltTsVfRd0X9sVYE4z1pF2o7rSTrQwE3bUl6f1pNemg9c9DHoEes/bO0T9ObTuBNG7Tn0V9OfTuLZqiaO50kmjopy0X8qV8redzpTzsloWPRiz5t58WdNl6nYs+2Ksj7Zq3JWNdLS9aau0/SjQtK6anrTOmkVqkhej0M+g3A6i+h9Fej0eJ50Z9O5pfruaFjTinTpsannTY1OtWVcaoikcaojU6biyKNmksaZmkJYf9OVRfrm7/BiOoLoi9brSa1XKVLvSq1u9L1WJ1z0D0GL15wAFPLruAFrX5tybICVasnwogBOqHSZgBCaac0AYjouiqAVyjomi9AViVcABwf/Z";

export const Description = () => {
  const [hasBorder, setBorder] = useState(false);
  const handleClick = () => setBorder(!hasBorder);
  // const buttonStyles = className('button')

  console.log(hasBorder);
  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={styles.Description__button}>
        <div className={styles.Description__imageContainer}>
          <Image
            src="/images/description.jpeg"
            alt="products marketplace"
            fill
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrows Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
