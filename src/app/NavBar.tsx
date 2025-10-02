const NavBar = () => {
  return (
    <div id="sidebar_header">
      <div className="flex items-center gap-2.5 px-3.5 h-[70px]">
        <a href="index.html">
          <img
            className="dark:hidden h-[42px]"
            src="/assets/app-icon/logo.png"
            alt="Logo"
          />
          <img
            className="hidden dark:inline-block h-[42px]"
            src="/assets/app-icon/logo.png"
            alt="Logo Dark"
          />
        </a>
        <div className="kt-menu kt-menu-default grow" data-kt-menu="true">
          <div
            className="kt-menu-item grow"
            data-kt-menu-item-offset="0px,0px"
            data-kt-menu-item-placement="bottom-start"
            data-kt-menu-item-toggle="dropdown"
            data-kt-menu-item-trigger="hover"
          >
            <div className="kt-menu-label cursor-pointer text-mono font-medium grow justify-between">
              <span className="text-base font-medium text-mono grow justify-start">
                TervanX
              </span>
              <span className="kt-menu-arrow">
                <i className="ki-filled ki-down" />
              </span>
            </div>
            <div className="kt-menu-dropdown w-48 py-2">
              <div className="kt-menu-item">
                <a
                  className="kt-menu-link"
                  href="public-profile/profiles/default.html"
                  tabIndex={0}
                >
                  <span className="kt-menu-icon">
                    <i className="ki-filled ki-profile-circle" />
                  </span>
                  <span className="kt-menu-title">Public Profile</span>
                </a>
              </div>
              <div className="kt-menu-item">
                <a className="kt-menu-link" href="index.htm" tabIndex={0}>
                  <span className="kt-menu-icon">
                    <i className="ki-filled ki-setting-2" />
                  </span>
                  <span className="kt-menu-title">Account</span>
                </a>
              </div>
              <div className="kt-menu-item">
                <a
                  className="kt-menu-link"
                  href="network/get-started.html"
                  tabIndex={0}
                >
                  <span className="kt-menu-icon">
                    <i className="ki-filled ki-users" />
                  </span>
                  <span className="kt-menu-title">Network</span>
                </a>
              </div>
              <div className="kt-menu-item">
                <a
                  className="kt-menu-link"
                  href="authentication/get-started.html"
                  tabIndex={0}
                >
                  <span className="kt-menu-icon">
                    <i className="ki-filled ki-security-user" />
                  </span>
                  <span className="kt-menu-title">Authentication</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2.5 px-3.5 mb-1">
        <div className="kt-input">
          <i className="ki-filled ki-magnifier" />
          <input
            className="min-w-0"
            placeholder="Search"
            type="text"
            defaultValue=""
          />
          <span className="text-xs text-secondary-foreground text-nowrap">
            cmd + /
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
