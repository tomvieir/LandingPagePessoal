import Link from "next/link";
import styles from './ProjetoItem.module.scss';

interface ProjetoProps {
    title: string;
    type: string;
    slug: string;
    img: string;
  }
  
  export default function ProjetoItem({ title, type, slug, img }: ProjetoProps) {
    return (
      <div className={styles.container}>
          
        <section>
            <div>
                
            </div>
          <img src={img} alt="img" />
          <div className={styles.text}>
            <h1># {title}</h1>
            <h2>- {type}</h2>
          </div>
        </section>
        <button type="button">
          <Link href={`/projetos/${slug}`}>
            <a>
              Ver mais 
            </a>
          </Link>
        </button>
      </div>
    );
  }