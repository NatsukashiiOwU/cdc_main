import React, { useState, useCallback } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Modal from '../UI/Modal';
import Icon from '../UI/Icon';
import Button from '../UI/Button';
import FormAuthorization from '../FormAuthorization';
import FormRegistration from '../FormRegistration';
import FormForgotPassEmail from '../FormForgotPassEmail';
import FormForgotPassword from '../FormForgotPassword';
import LINKS from './Links';

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState('');
  const [isShowThanks, setIsShowThanks] = useState(false);

  const openModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
    setOpenForm('');
  }, [isOpenModal, openForm]);

  const closeModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
    setIsShowThanks(!isShowThanks);
  }, [isOpenModal, isShowThanks]);

  return (
    <>
      <nav className={cn(styles.navbar, isOpenModal && styles.navbar_fixed)}>
        <div className={styles.navbar__links}>
          <ul>
            {LINKS.map((item) => (
              item.title !== '' ? (
                <li key={item.icon}>
                  <Link to={item.link} className={styles.navbar__link} key={item.icon}>
                    <Icon className={styles.navbar__linkIcon} view={item.icon} />
                    {!!item.title && (
                    <div className={styles.navbar__linkTitle}>
                      {item.title}
                    </div>
                    )}
                  </Link>
                </li>
              ) : (
                <li key={item.icon}>
                  <Button
                    classname={styles.navbar__auth}
                    key={item.icon}
                    onClick={openModal}
                  >
                    <Icon className={styles.navbar__linkIcon} view={item.icon} />
                    {!!item.title && (
                    <div className={styles.navbar__linkTitle}>
                      {item.title}
                    </div>
                    )}
                  </Button>
                </li>
              )
            ))}
          </ul>
        </div>
      </nav>
      <Modal
        classname={styles.navbar__modal}
        isOpen={isOpenModal}
      >
        <TransitionGroup className={styles.navbar__form}>
          {openForm === '' && (
          <CSSTransition
            key={openForm}
            timeout={300}
            classNames={{
              enterActive: styles.navbar__form_enterActive,
              enterDone: styles.navbar__form_enterDone,
              exitActive: styles.navbar__form_exitActive,
              exitDone: styles.navbar__form_exitDone,
            }}
          >
            <FormAuthorization changeForm={setOpenForm} />
          </CSSTransition>
          )}
          {openForm === 'registration' && (
          <CSSTransition
            key={openForm}
            timeout={300}
            classNames={{
              enter: styles.navbar__form_enter,
              enterActive: styles.navbar__form_enterActive,
              enterDone: styles.navbar__form_enterDone,
              exit: styles.navbar__form_exit,
              exitActive: styles.navbar__form_exitActive,
              exitDone: styles.navbar__form_exitDone,
            }}
          >
            <FormRegistration
              changeForm={setOpenForm}
              onSubmit={closeModal}
              classname={styles.navbar__formRegistration}
            />
          </CSSTransition>
          )}
          {openForm === 'changePasswordEmail' && (
          <CSSTransition
            key={openForm}
            timeout={300}
            classNames={{
              enter: styles.navbar__form_enter,
              enterActive: styles.navbar__form_enterActive,
              enterDone: styles.navbar__form_enterDone,
              exit: styles.navbar__form_exit,
              exitActive: styles.navbar__form_exitActive,
              exitDone: styles.navbar__form_exitDone,
            }}
          >
            <FormForgotPassEmail
              changeForm={setOpenForm}
              classname={styles.navbar__formForgotPassEmail}
            />
          </CSSTransition>
          )}
          {openForm === 'changePassword' && (
          <CSSTransition
            key={openForm}
            timeout={300}
            classNames={{
              enter: styles.navbar__form_enter,
              enterActive: styles.navbar__form_enterActive,
              enterDone: styles.navbar__form_enterDone,
              exit: styles.navbar__form_exit,
              exitActive: styles.navbar__form_exitActive,
              exitDone: styles.navbar__form_exitDone,
            }}
          >
            <FormForgotPassword
              changeForm={setOpenForm}
              classname={styles.navbar__formForgotPassword}
            />
          </CSSTransition>
          )}
        </TransitionGroup>
      </Modal>
    </>
  );
};

export default React.memo(Navbar);
