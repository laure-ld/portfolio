import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const [filePreview, setFilePreview] = useState(null);
    const onSubmit = (data) => {
    console.log("Données du formulaire :", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="contactForm" id="contact">
        <h3>Me contacter</h3>
      <div className="mb-4">
        <label className="block text-sm font-medium">Prénom *</label>
        <input {...register("prenom", { required: "Le prénom est requis" })} className="w-full p-2 border rounded" />
        {errors.prenom && <p className="text text-sm">{errors.prenom.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Email *</label>
        <input {...register("email", { required: "L'email est requis", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email invalide" } })} className="w-full p-2 border rounded" />
        {errors.email && <p className="text text-sm">{errors.email.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Message *</label>
        <textarea {...register("message", { required: "Le message est requis" })} className="w-full p-2 border rounded"></textarea>
        {errors.message && <p className="text text-sm">{errors.message.message}</p>}
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Numéro de téléphone</label>
        <input {...register("telephone")} className="w-full p-2 border rounded" />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium">Pièce jointe</label>
        <input type="file" {...register("fichier")} className="w-full" onChange={(e) => setFilePreview(e.target.files[0]?.name)} />
        {filePreview && <p className="text text-sm mt-1">Fichier sélectionné : {filePreview}</p>}
      </div>
      
      <button type="submit" className="buttonSubmit">Envoyer</button>
    </form>
  );
}