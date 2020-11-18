import React, {
  FormEvent,
  SyntheticEvent,
  useCallback,
  useEffect,
  useState,
} from "react";
import Button from "../../atoms/Button";
import styles from "./Footer.module.css";
import cn from "classnames";

interface IFooterProps {
  onNewCreate: (activity: string) => void;
}

const Footer: React.FC<IFooterProps> = (props) => {
  const { onNewCreate } = props;
  const { footer, footerInner, input, button, label, unvalidated } = styles;
  const [title, setTitle] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(false);
  }, [title]);

  const handleInput = useCallback((e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setTitle(value);
  }, []);

  const handleNewCreate = () => {
    if (!title) {
      setIsError(true);
      return;
    }
    onNewCreate(title);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleNewCreate();
  };

  return (
    <div className={footer}>
      <form className={footerInner} onSubmit={handleFormSubmit}>
        <div className={label}>Добавить запись</div>
        <div>
          <input
            className={cn(input, { [unvalidated]: isError })}
            value={title}
            onChange={handleInput}
          />
          <Button type="submit" status="normal" className={button}>
            Добавить
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Footer;
