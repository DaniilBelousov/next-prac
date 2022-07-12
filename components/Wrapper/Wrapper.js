import PropTypes from 'prop-types';
import styles from './Wrapper.module.css';

const Wrapper = ({ children }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div className={styles.title}>Bearcar</div>
        </div>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default Wrapper;
