<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class Withdraw extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    protected $penarikSaldo;

    public function __construct($penarikSaldo)
    {
        $this->penarikSaldo = $penarikSaldo;
    }

    /**
     * Get the message envelope.
     */
    public function build()
    {
        return $this->view('mail.withdraw')
                    ->with('penarikSaldo', $this->penarikSaldo)
                    ->subject('Withdraw');
    }
    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [];
    }
}
