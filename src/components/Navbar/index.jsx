import React, { useState, useCallback, useEffect } from 'react';
import cn from 'classnames';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';
import Modal from '../UI/Modal';
import Icon from '../UI/Icon';
import Button from '../UI/Button';
import FormAuthorization from '../FormAuthorization';
import FormRegistration from '../FormRegistration';
import FormForgotPassEmail from '../FormForgotPassEmail';
import FormForgotPassword from '../FormForgotPassword';

import { LINKS, AUTH_LINKS, ADMIN_LINKS } from './Links';

import AvatarUser from '../../assets/images/listPage/CodeClass/img8.png';

const Navbar = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAuth(true);
    setIsAdmin(true);
  }, []);

  const openModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
    setOpenForm('');
  }, [isOpenModal, openForm]);

  return (
    <>
      <nav className={cn(styles.navbar,
        isOpenModal && !isAuth && styles.navbar_fixed,
        isAuth && styles.navbar__authWrapper)}
      >
        <div className={cn(styles.navbar__links, isAuth && styles.navbar__authLinksWrap)}>
          <ul className={isAuth && styles.navbar__authLinks}>
            {isAuth && (
            <li>
              <Button
                classname={cn(styles.navbar__auth, isAuth && styles.navbar__openModal)}
                onClick={openModal}
              >
                {isAuth ? (
                  <Icon className={styles.navbar__linkIcon} view={isOpenModal ? 'closeMenu' : 'burger'} />
                ) : (
                  <Icon className={styles.navbar__linkIcon} view="closeMenu" />
                )}
              </Button>
            </li>
            )}
            {LINKS.map((item) => (
              item.title !== '' ? (
                <li key={item.icon} className={styles.navbar__linkWrapper}>
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
                <li
                  key={item.icon}
                  className={isAuth && styles.navbar__authUser}
                >
                  <Button
                    classname={cn(styles.navbar__auth, isAuth && styles.navbar__userButton)}
                    key={item.icon}
                    onClick={isAuth ? null : openModal}
                  >
                    {isAuth ? (
                      <img src={AvatarUser} alt="пользователь" />
                    ) : (
                      <Icon className={styles.navbar__linkIcon} view={item.icon} />

                    )}
                  </Button>
                </li>
              )
            ))}
          </ul>
        </div>
      </nav>
      {isAuth ? (
        <Modal
          isOpen={isOpenModal}
          classname={styles.navbar__modalMenu}
          isAuth
        >
          <ul>
            {isAdmin ? (
              ADMIN_LINKS.map((item) => (
                <li key={item.title} className={styles.navbar__modalItem}>
                  <Link to={item.link} className={styles.navbar__modalLink}>
                    {item.title}
                  </Link>
                </li>
              ))
            ) : (
              AUTH_LINKS.map((item) => (
                <li key={item.title} className={styles.navbar__modalItem}>
                  <Link to={item.link} className={styles.navbar__modalLink}>
                    {item.title}
                  </Link>
                </li>
              )))}
          </ul>
        </Modal>
      ) : (
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
      )}
    </>
  );
};

export default React.memo(Navbar);
