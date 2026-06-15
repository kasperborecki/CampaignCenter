<template>
  <form class="w-full max-w-[560px] space-y-7" @submit.prevent="AuthSubmit(authType === 0 ? 'login' : 'register')">
    <header class="space-y-2 text-center">
      <p class="pb-2 text-3xl font-thin text-white">
        {{ authType === 0 ? t('auth.welcomeBack') : t('auth.registerTitle') }}
      </p>
      <p class="pb-3 text-lg font-bold text-slate-400">
        {{ authType === 0 ? t('auth.loginPrompt') : t('auth.registerPrompt') }}
      </p>
    </header>

    <div class="grid grid-cols-2 rounded-[10px] border border-white/15 bg-[#0d0e14] p-1">
      <Button
        type="button"
        :label="t('auth.login')"
        text
        class="h-12 rounded-lg text-sm font-semibold transition"
        :class="authType === 0 ? activeModeClass : inactiveModeClass"
        @click="authType = 0"
      />
      <Button
        type="button"
        :label="t('auth.register')"
        text
        class="h-12 rounded-lg text-sm font-semibold transition"
        :class="authType === 1 ? activeModeClass : inactiveModeClass"
        @click="authType = 1"
      />
    </div>

    <div class="grid gap-3 sm:grid-cols-3">
      <Button
        v-for="provider in providers"
        :key="provider.key"
        type="button"
        :label="t(provider.label)"
        :icon="provider.icon"
        outlined
        class="flex h-12 items-center justify-center gap-2 rounded-lg border-[#5b2eff]/55 bg-transparent px-4 text-sm font-semibold text-slate-100 transition hover:border-[#a78bfa] hover:bg-[#5b2eff]/10"
      />
    </div>

    <div class="flex items-center gap-4 text-sm text-slate-400">
      <span class="h-px flex-1 bg-white/15" />
      <span>{{ t('auth.orContinueWith') }}</span>
      <span class="h-px flex-1 bg-white/15" />
    </div>

    <div class="space-y-5">
      <label class="block space-y-2">
        <span class="text-sm font-medium text-slate-100">{{ t('auth.email') }}</span>
        <IconField icon-position="left" class="block">
          <InputIcon class="pi pi-at left-4 text-slate-500" />
          <InputText
            v-model="form.email"
            autocomplete="email"
            :placeholder="t('auth.emailPlaceholder')"
            class="h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
          />
        </IconField>
      </label>

      <label class="block space-y-2">
        <span class="text-sm font-medium text-slate-100">{{ t('auth.password') }}</span>
        <IconField icon-position="left" class="block">
          <InputIcon class="pi pi-lock left-4 text-slate-500" />
          <InputText
            v-model="form.password"
            :type="marker"
            autocomplete="current-password"
            :placeholder="t('auth.passwordPlaceholder')"
            class="h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
          />
          <Button
            type="button"
            :icon="marker === 'password' ? 'pi pi-eye' : 'pi pi-eye-slash'"
            text
            rounded
            class="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-[#a78bfa] hover:text-white"
            :aria-label="marker === 'password' ? 'Show password' : 'Hide password'"
            @click="toggleMarker"
          />
        </IconField>
      </label>

      <label v-if="authType === 1" class="block space-y-2">
        <span class="text-sm font-medium text-slate-100">{{ t('auth.confirmPassword') }}</span>
        <IconField icon-position="left" class="block">
          <InputIcon class="pi pi-lock left-4 text-slate-500" />
          <InputText
            v-model="form.confirmPassword"
            :type="markerTwo"
            autocomplete="current-password"
            :placeholder="t('auth.confirmPasswordPlaceholder')"
            class="h-12 w-full rounded-lg border border-white/15 bg-[#11131c] pl-10 pr-20 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#a78bfa] focus:ring-2 focus:ring-[#5b2eff]/30"
          />
          <Button
            type="button"
            :icon="markerTwo === 'password' ? 'pi pi-eye' : 'pi pi-eye-slash'"
            text
            rounded
            class="absolute right-3 top-1/2 h-8 w-8 -translate-y-1/2 text-[#a78bfa] hover:text-white"
            :aria-label="markerTwo === 'password' ? 'Show password' : 'Hide password'"
            @click="toggleMarkerTwo"
          />
        </IconField>
      </label>
    </div>

    <Message
      v-if="errorBox"
      severity="error"
      :closable="false"
      class="rounded border border-[#EF4444]/20 bg-[#EF4444]/5 p-4 text-sm text-[#EF4444]/80"
    >
      <p v-if="ruleErrors.email">
        <i class="pi pi-circle-fill mr-2 text-[8px]" />{{ t('auth.invalidEmail') }}
      </p>
      <p v-if="ruleErrors.password">
        <i class="pi pi-circle-fill mr-2 text-[8px]" />{{ t('auth.invalidPassword') }}
      </p>
      <p v-if="authType === 1 && ruleErrors.confirmPassword">
        <i class="pi pi-circle-fill mr-2 text-[8px]" />{{ t('auth.passwordMismatch') }}
      </p>
    </Message>

    <div class="flex flex-wrap items-center justify-between gap-3">
      <label for="remember" class="flex cursor-pointer items-center gap-3 text-slate-300">
        <Checkbox
          v-model="rememberMe"
          input-id="remember"
          binary
          class="h-6 w-6 rounded border-2 border-[#FF91AF] bg-transparent"
          :pt="checkboxPt"
        />
        <span class="text-[1em] font-semibold select-none">{{ t('auth.rememberMe') }}</span>
      </label>

      <Button
        v-if="authType === 0"
        type="button"
        :label="t('auth.forgotPassword')"
        text
        class="text-sm font-semibold text-[#a78bfa] transition hover:text-white"
      />
    </div>

    <Button
      type="submit"
      :label="authType === 0 ? t('auth.login') : t('auth.register')"
      :loading="isSubmitting"
      class="mb-6 h-12 w-full rounded-lg bg-[#5b2eff] text-sm font-bold text-white shadow-lg shadow-[#5b2eff]/25 transition hover:bg-[#7047ff] focus:outline-none focus:ring-2 focus:ring-[#a78bfa] focus:ring-offset-2 focus:ring-offset-[#0d0e14]"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { rules } from '~/utils/rules'
import { useAuthHolderStore } from '~/stores/authHolder'

const { t } = useI18n()
const authType = ref(0)
const marker = ref<'password' | 'text'>('password')
const markerTwo = ref<'password' | 'text'>('password')
const errorBox = ref(false)
const isSubmitting = ref(false)
const rememberMe = ref(false)

const activeModeClass = 'border border-[#5b2eff]/50 bg-[#5b2eff]/15 text-[#a78bfa]'
const inactiveModeClass = 'text-slate-400 hover:text-white'

const providers = [
  { key: 'google', label: 'authProviders.google', icon: 'pi pi-google' },
  { key: 'facebook', label: 'authProviders.facebook', icon: 'pi pi-facebook' },
  { key: 'apple', label: 'authProviders.apple', icon: 'pi pi-apple' },
]

const checkboxPt = {
  root: { class: 'relative inline-flex h-6 w-6 items-center justify-center' },
  input: { class: 'absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0' },
  box: {
    class:
      'flex h-6 w-6 items-center justify-center rounded border-2 border-[#FF91AF] bg-transparent text-white',
  },
  icon: { class: 'text-xs text-white' },
}

const form = ref({
  email: '',
  password: '',
  confirmPassword: '',
})

const ruleErrors = ref({
  email: false,
  password: false,
  confirmPassword: false,
})

function toggleMarker() {
  marker.value = marker.value === 'password' ? 'text' : 'password'
}

function toggleMarkerTwo() {
  markerTwo.value = markerTwo.value === 'password' ? 'text' : 'password'
}

function AuthSubmit(type: 'login' | 'register') {
  validateForm()
  if (errorBox.value) return

  isSubmitting.value = true

  window.setTimeout(() => {
    const authStore = useAuthHolderStore()
    authStore.setToken(`${type}-token`)
    isSubmitting.value = false
    void navigateTo('/')
  }, 800)
}

function validateForm() {
  const emailValid = rules.required(form.value.email) && rules.email(form.value.email)
  const passwordValid = rules.required(form.value.password) && rules.password(form.value.password)

  const confirmPasswordValid =
    authType.value === 0 ||
    (rules.required(form.value.confirmPassword) &&
      rules.password(form.value.confirmPassword) &&
      rules.sameAs(form.value.password)(form.value.confirmPassword))

  errorBox.value = !emailValid || !passwordValid || !confirmPasswordValid
  ruleErrors.value = {
    email: !emailValid,
    password: !passwordValid,
    confirmPassword: !confirmPasswordValid,
  }
}
</script>
