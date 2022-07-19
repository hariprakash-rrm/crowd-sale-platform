<template>
  <!-- BEGIN: Top Bar -->
  <div
    class="top-bar-boxed h-[70px] md:h-[65px] backdrop-blur z-[51] border-b border-white/[0.08] mt-12 md:mt-0 -mx-3 sm:-mx-8 md:-mx-0 px-3 md:border-b-0 relative md:fixed md:inset-x-0 md:top-0 sm:px-8 md:px-10 md:pt-10 md:bg-gradient-to-b md:from-slate-100 md:to-transparent dark:md:from-darkmode-700"
  >
    <div class="h-full flex items-center">
      <!-- BEGIN: Logo -->
      <a
        href=""
        class="logo -intro-x hidden md:flex md:items-center xl:w-[250] block"
      >
        <img
          alt="unreal-capital"
          class="logo__image w-32"
          src="@/assets/images/uc/uc-light.png"
        />
        <!-- <span class="logo__text text-white text-lg ml-3"> Enigma </span> -->
      </a>
      <!-- END: Logo -->
      <!-- BEGIN: Breadcrumb -->
      <nav aria-label="breadcrumb" class="-intro-x h-[45px] mr-auto">
        <ol class="breadcrumb breadcrumb-light">
          <li class="breadcrumb-item"><a href="#">Application</a></li>
          <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Search -->
      <!-- <div class="intro-x relative mr-3 sm:mr-6">
        <div class="search hidden sm:block">
          <input
            type="text"
            class="search__input form-control border-transparent"
            placeholder="Search..."
            @focus="showSearchDropdown"
            @blur="hideSearchDropdown"
          />
          <SearchIcon class="search__icon dark:text-slate-500" />
        </div>
        <a class="notification notification--light sm:hidden" href="">
          <SearchIcon class="notification__icon dark:text-slate-500" />
        </a>
        <div class="search-result" :class="{ show: searchDropdown }">
          <div class="search-result__content">
            <div class="search-result__content__title">Pages</div>
            <div class="mb-5">
              <a href="" class="flex items-center">
                <div
                  class="w-8 h-8 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"
                >
                  <InboxIcon class="w-4 h-4" />
                </div>
                <div class="ml-3">Mail Settings</div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div
                  class="w-8 h-8 bg-pending/10 text-pending flex items-center justify-center rounded-full"
                >
                  <UsersIcon class="w-4 h-4" />
                </div>
                <div class="ml-3">Users & Permissions</div>
              </a>
              <a href="" class="flex items-center mt-2">
                <div
                  class="w-8 h-8 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"
                >
                  <CreditCardIcon class="w-4 h-4" />
                </div>
                <div class="ml-3">Transactions Report</div>
              </a>
            </div>
            <div class="search-result__content__title">Users</div>
            <div class="mb-5">
              <a
                v-for="(faker, fakerKey) in $_.take($f(), 4)"
                :key="fakerKey"
                href
                class="flex items-center mt-2"
              >
                <div class="w-8 h-8 image-fit">
                  <img
                    alt="unreal-capital"
                    class="rounded-full"
                    :src="faker.photos[0]"
                  />
                </div>
                <div class="ml-3">{{ faker.users[0].name }}</div>
                <div
                  class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
                >
                  {{ faker.users[0].email }}
                </div>
              </a>
            </div>
            <div class="search-result__content__title">Products</div>
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2"
            >
              <div class="w-8 h-8 image-fit">
                <img
                  alt="unreal-capital"
                  class="rounded-full"
                  :src="faker.images[0]"
                />
              </div>
              <div class="ml-3">{{ faker.products[0].name }}</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs text-right"
              >
                {{ faker.products[0].category }}
              </div>
            </a>
          </div>
        </div>
      </div> -->
      <!-- END: Search -->
      <!-- BEGIN: Notifications -->
      <!-- <Dropdown class="intro-x mr-4 sm:mr-6">
        <DropdownToggle
          tag="div"
          role="button"
          class="notification notification--bullet cursor-pointer"
        >
          <BellIcon class="notification__icon dark:text-slate-500" />
        </DropdownToggle>
        <DropdownMenu class="notification-content pt-2">
          <DropdownContent tag="div" class="notification-content__box">
            <div class="notification-content__title">Notifications</div>
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 5)"
              :key="fakerKey"
              class="cursor-pointer relative flex items-center"
              :class="{ 'mt-5': fakerKey }"
            >
              <div class="w-12 h-12 flex-none image-fit mr-1">
                <img
                  alt="unreal-capital"
                  class="rounded-full"
                  :src="faker.photos[0]"
                />
                <div
                  class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"
                ></div>
              </div>
              <div class="ml-2 overflow-hidden">
                <div class="flex items-center">
                  <a href="javascript:;" class="font-medium truncate mr-5">{{
                    faker.users[0].name
                  }}</a>
                  <div class="text-xs text-slate-400 ml-auto whitespace-nowrap">
                    {{ faker.times[0] }}
                  </div>
                </div>
                <div class="w-full truncate text-slate-500 mt-0.5">
                  {{ faker.news[0].shortContent }}
                </div>
              </div>
            </div>
          </DropdownContent>
        </DropdownMenu>
      </Dropdown> -->
      <!-- END: Notifications -->
      <Dropdown class="intro-x w-48 md:mr-4">
        <DropdownToggle
          tag="div"
          role="button"
          class="w-40 overflow-hidden zoom-in scale-110"
        >
          <p
            @click="connect"
            class="text-white text-center bg-primary p-1 px-5 rounded-full truncate"
          >
            {{ account.address }}
          </p>
          <p class="text-white text-xs text-center" v-if="account.network != 'Unknown'">
            Network - {{ account.network }}
          </p>
        </DropdownToggle>
        <DropdownMenu v-if="connected" class="w-56">
          <DropdownContent
            class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
          >
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <SlashIcon class="w-4 h-4 mr-2" /> Disconnect</DropdownItem
            >
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>

      <!-- BEGIN: Account Menu -->
      <Dropdown class="intro-x w-8 h-8">
        <DropdownToggle
          tag="div"
          role="button"
          class="w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in scale-110"
        >
          <img alt="unreal-capital" :src="$f()[9].photos[0]" />
        </DropdownToggle>
        <DropdownMenu class="w-56">
          <DropdownContent
            class="bg-primary/80 before:block before:absolute before:bg-black before:inset-0 before:rounded-md before:z-[-1] text-white"
          >
            <DropdownHeader tag="div" class="!font-normal">
              <div class="font-medium">
                {{ getUserName }}
              </div>
            </DropdownHeader>
            <DropdownDivider class="border-white/[0.08]" />
            <router-link to="/profile?tab_id=1">
              <DropdownItem class="dropdown-item hover:bg-white/5">
                <UserIcon class="w-4 h-4 mr-2" /> Profile
              </DropdownItem>
            </router-link>
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <EditIcon class="w-4 h-4 mr-2" /> Add Account</DropdownItem
            >
            <router-link to="/profile?tab_id=2">
            <DropdownItem
              class="dropdown-item hover:bg-white/5"
            >
              <LockIcon class="w-4 h-4 mr-2" /> Reset Password</DropdownItem
            >
            </router-link>
            <DropdownItem class="dropdown-item hover:bg-white/5">
              <HelpCircleIcon class="w-4 h-4 mr-2" /> Help</DropdownItem
            >
            <DropdownDivider class="border-white/[0.08]" />
            <DropdownItem
              class="dropdown-item hover:bg-white/5"
              @click="logout"
            >
              <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout</DropdownItem
            >
          </DropdownContent>
        </DropdownMenu>
      </Dropdown>
      <!-- END: Account Menu -->
    </div>
  </div>
  <!-- END: Top Bar -->
</template>

<script lang="ts">
import { ref } from "vue";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useAuthUserStore } from "../../stores/auth";
import { mapState, mapActions } from "pinia";
import { StorageService } from "../../service/storage.services";
import { ContractService } from "../../service/contract.service";

declare global {
  interface Window {
    ethereum?: MetaMaskInpageProvider;
  }
}

export default {
  name: "web3wallet",
  data() {
    return {
      connected: false,
      contractResult: "",
      title: "connect Wallet",
      connector: "",
      ethereum: "",
      account: {},

      storageService: StorageService,
      contractService: ContractService,
    };
  },
  computed: {
    ...mapState(useAuthUserStore, ["user"]),
    getUserName() {
      return this.user?.profile?.name || "";
    },
  },
  async mounted() {
    this.account =
      this.storageService.getItem("account") === null
        ? { address: "", network: "", chainId: "", provider: "" }
        : JSON.parse(this.storageService.getItem("account") || "{}");
    this.account.address = "ConnectWallet";
    this.setAccount(
      this.account.address,
      this.account.chainId,
      this.account.provider
    );
    this.connect();
    this.fetchUser();
  },

  methods: {
    ...mapActions(useAuthUserStore, ["logout", "fetchUser"]),
    connect() {
      // this connects to the wallet
      this.openMetamask();
    },

    async openMetamask() {
      this.ethereum = window["ethereum"];
      // if (typeof this.ethereum !== "undefined") {
      // }
      const accounts = await this.ethereum?.request({
        method: "eth_requestAccounts",
      });
      this.setAccount(accounts[0], this.ethereum.chainId, "metamask");
      this.metamastListener();
      // window.location.reload();
    },

    metamastListener() {
      // Listener
      this.ethereum.on("accountsChanged", (accounts: any) => {
        this.setAccount(accounts[0], this.ethereum.chainId, "metamask");
      });
      this.ethereum.on("chainChanged", (chainId: any) => {
        this.setAccount(this.account.address, chainId, "metamask");
      });
      this.storageService.setItem("walletconnect", "");
    },
    async setAccount(address: any, chainId: any, provider) {
      let account: any;
      if (address != "" && address != undefined) {
        const { network, key } = await this.setNetwork(chainId);
        account = {
          address: address,
          chainId: chainId,
          network,
          key,
          provider: provider,
        };
      } else {
        account = {
          address: "",
          network: "",
          chainId: "",
          provider: "",
          key: "",
        };
      }
      this.contractService.setAccount(account);
      this.account = Object.assign({}, account);
      this.storageService.setItem("account", JSON.stringify(this.account));
      this.storageService.setItem("address", this.account.address);
    },

    setNetwork(chainId: any) {
      let network: any;
      let key: any;
      switch (chainId) {
        case "0x1":
        case 1:
          network = "Mainnet";
          key = "ETH";
          break;
        case "0x3":
        case 3:
          network = "Ropsten";
          key = "ETH";
          break;
        case "0x4":
        case 4:
          network = "Rinkeby";
          key = "ETH";
          break;
        case "0x38":
        case 56:
          network = "BSC Mainnet";
          key = "BSC";
          break;
        case "0x61":
        case 97:
          network = "BSC Testnet";
          key = "BSC";
          break;
        default:
          network = "Unknown";
          break;
      }
      return { network, key };
    },
  },
};

const searchDropdown = ref(false);
const showSearchDropdown = () => {
  searchDropdown.value = true;
};
const hideSearchDropdown = () => {
  searchDropdown.value = false;
};
</script>
